from flask import Flask, render_template


app = Flask(__name__, static_folder='/', template_folder='/')
app.template_folder = app.root_path + app.template_folder

@app.route('/', strict_slashes=False)
def graphics():
    return render_template('graph2.html')

if __name__ == "__main__":
    host = '0.0.0.0'
    port = '5004'
    app.run(host=host, port=port, threaded=True)
