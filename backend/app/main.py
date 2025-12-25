from fastapi import FastAPI
from typing import List

from .models import Job, JobCreate
from .storage import JobStorage

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],          # для локальной разработки
    allow_credentials=True,
    allow_methods=["*"],          # ВАЖНО: разрешает OPTIONS
    allow_headers=["*"],
)


storage = JobStorage()


@app.post("/jobs", response_model=Job)
def create_job(job: JobCreate):
    return storage.create_job(job)


@app.get("/jobs", response_model=List[Job])
def list_jobs():
    return storage.list_jobs()
