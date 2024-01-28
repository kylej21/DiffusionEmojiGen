"""
app.py

This one file is all you need to start off with your FastAPI server!
"""
from collections.abc import Mapping

import uvicorn
from fastapi import FastAPI, status
from routers import views
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

# Initializing and setting configurations for your FastAPI application is one
# of the first things you should do in your code.
app = FastAPI()
app.mount("/static", StaticFiles(directory="routers/static"), name="static")

origins = ["*"]

# Set up CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(views.router)


if __name__ == "__main__":
    uvicorn.run("main:app", port=5000, reload=True)
