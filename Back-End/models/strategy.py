#!/usr/bin/python
"""class Strategy"""

import models
from models.base_model import BaseModel, Base
from sqlalchemy import Column, String, ForeignKey
from sqlalchemy.orm import relationship


class Strategy(BaseModel, Base):
    """Representation of strategy"""
    __tablename__ = 'strategies'
    name = Column(String(128), nullable=False)
    backtests = relationship("Backtest",
                             backref="strategies",
                             cascade="all, delete, delete-orphan")

    def __init__(self, *args, **kwargs):
        """initializes strategy"""
        super().__init__(*args, **kwargs)
