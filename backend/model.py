from database import Base
from sqlalchemy import Column, Integer, String
from pydantic import BaseModel
class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    hashed_password = Column(String)

class UserCreate(BaseModel):
    username: str
    password: str
 
class UserResponse(BaseModel):
    id: int
    username: str

    class Config:
        orm_mode = True


