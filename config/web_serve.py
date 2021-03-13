from flask import Flask, render_template


app = Flask(__name__)

@app.route('/', strict_slashes=False)
def graphics():
    return render_template('graficado.html')
