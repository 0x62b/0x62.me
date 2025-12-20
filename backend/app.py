from dotenv import load_dotenv
from flask import Flask, jsonify
from flask_cors import CORS

import requests
import os

load_dotenv()

app = Flask(__name__)
CORS(app)

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

if __name__ == '__main__':
    app.run(debug=True)
