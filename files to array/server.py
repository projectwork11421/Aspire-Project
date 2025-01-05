import http.server
import socketserver
import os
PORT = 8000
directory = os.getcwd()
os.chdir(directory)
Handler = http.server.SimpleHTTPRequestHandler
with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving HTML files from {directory} at http://localhost:{PORT}")
    httpd.serve_forever()