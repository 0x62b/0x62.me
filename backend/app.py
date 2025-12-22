from dotenv import load_dotenv
from flask import Flask, request, jsonify
from flask_cors import CORS
from pathlib import Path

import re
import requests
import os
import json

load_dotenv()

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/api/slack_online', methods=['GET'])
def slack_online():
    token = os.environ.get('SLACK_TOKEN')
    user_id = "U092839T3A7"
    
    if not token:
        return jsonify({"error": "SLACK_TOKEN not set"}), 500

    response = requests.post(
        "https://slack.com/api/users.getPresence",
        data={
            "token": token,
            "user": user_id
        }
    )
    
    return jsonify(response.json()) #presence

@app.route("/api/slack_status", methods=['GET'])
def slack_status():
    token = os.environ.get('SLACK_TOKEN')
    user_id = "U092839T3A7"
    
    if not token:
        return jsonify({"error": "SLACK_TOKEN not set"}), 500

    response = requests.post(
        "https://slack.com/api/users.profile.get",
        data={
            "token": token,
            "user": user_id
        }
    )
    
    return jsonify(response.json()) # profile.status_text

@app.route('/api/spotify', methods=['GET'])
def spotify_status():
    return jsonify({})

@app.route('/api/hackatime', methods=['GET'])
def hackatime_status():
    return jsonify({})

@app.route('/api/posts/new', methods=['POST'])
def new_post():
    title = request.form.get("title")
    content = request.form.get("content")
    description = request.form.get("description")
    timestamp = request.form.get("timestamp")
    auth = request.form.get("auth")
    
    if auth != os.environ.get("AUTH"):
        return jsonify({"error": "authentication failed"}), 403

    filename = re.sub(r'[^\w\s-]', '', title.lower())
    filename = re.sub(r'[-\s]+', '-', filename).strip('-')
    filename = f"{filename}.md"
    
    main_dir = Path(__file__).parent.parent / "blog"
    post_dir = main_dir / "posts"
    
    file = post_dir / filename
    json_file = main_dir / "posts.json"
    
    if file.exists():
        return jsonify({"error": "post with same title already exists"}), 409
    
    try:
        with open(file, 'w') as f:
            f.write(f"# {title}\n\n{content}")
        
        with open(json_file, 'r+') as f:
            post = {
                "title": title,
                "description": description,
                "filename": filename,
                "timestamp": int(timestamp)
            }
            posts = json.loads(f.read())
            
            posts['posts'].append(post)
            
            f.seek(0)
            f.write(json.dumps(posts))
            f.truncate()

        return jsonify({
            "success": True,
            "filename": filename,
            "path": str(file)
        }), 201
    except Exception as e:
        return jsonify({"error": f"{str(e)}"}), 500

if __name__ == '__main__':
    app.run(debug=True)
