from flask import Flask, render_template


app = Flask(__name__)

@app.route('/', methods=['GET'])
def menu():
    try:
        return render_template('menu.html')
    except Exception as e:
        return str(e)

@app.route('/play-classic', methods=['GET'])
def play_classic():
    try:
        return render_template('play_classic.html')
    except Exception as e:
        return str(e)

if __name__ == "__main__":
    app.run()

