from flask import Flask
app = Flask(__name__)

@app.route("/hello/<name>")
def hello(name):
    return "Hello %s" % name

application = app

if __name__ == "__main__":
    app.run()
