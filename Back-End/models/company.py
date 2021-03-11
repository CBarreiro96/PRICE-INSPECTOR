#!/usr/bin/python3
"""class Company"""

import models
from models.base_model import BaseModel, Base
from sqlalchemy import Column, String, ForeignKey
from sqlalchemy.orm import relationship


class Company(BaseModel, Base):
    """Representation of company"""
    __tablename__ = 'companies'
    name = Column(String(128), nullable=False, unique=True)
    ticker = Column(String(60), nullable=False, unique=True)
    prices = relationship("Price",
                          backref="companies",
                          cascade="all, delete, delete-orphan")
    backtests = relationship("Backtest",
                             backref="companies",
                             cascade="all, delete, delete-orphan")

    def __init__(self, *args, **kwargs):
        """initializes company"""
        super().__init__(*args, **kwargs)
