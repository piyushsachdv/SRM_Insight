from flask import Flask, render_template, request, redirect, url_for, flash

app = Flask(__name__)
app.secret_key = 'supersecretkey'

# Serve the homepage (index.html)
@app.route('/')
def index():
    return render_template('helpdesk.html')  # index.html should be in the 'templates' folder

# Handle form submissions
@app.route('/submit_form', methods=['POST'])
def submit_form():
    name = request.form.get('name')
    email = request.form.get('email')
    message = request.form.get('message')

    if name == '' or email == '' or message == '':
        flash('All fields are required!')
        return redirect(url_for('index'))

    # Here, you could save the form data to a database, send an email, etc.
    flash('Your message has been sent successfully!')
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)
