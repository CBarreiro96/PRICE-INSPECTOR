#!/usr/bin/python
"""class Strategy"""

import models
from models.base_model import BaseModel, Base
from sqlalchemy import Column, String, Float, ForeignKey
from sqlalchemy.orm import relationship


class Strategy(BaseModel, Base):
    """Representation of a Strategy"""
    __tablename__ = 'strategies'
    name = Column(String(128), nullable=False)
    backtests = relationship("Backtest",
                             backref="strategies",
                             cascade="all, delete, delete-orphan")
    param_0_name = Column(String(60), nullable=False)
    param_0_value = Column(Float, nullable=False)
    param_1_name = Column(String(60), default=None)
    param_1_value = Column(Float, default=None)
    param_2_name = Column(String(60), default=None)
    param_2_value = Column(Float, default=None)
    param_3_name = Column(String(60), default=None)
    param_3_value = Column(Float, default=None)
    param_4_name = Column(String(60), default=None)
    param_4_value = Column(Float, default=None)
    param_5_name = Column(String(60), default=None)
    param_5_value = Column(Float, default=None)
    param_6_name = Column(String(60), default=None)
    param_6_value = Column(Float, default=None)
    param_7_name = Column(String(60), default=None)
    param_7_value = Column(Float, default=None)
    param_8_name = Column(String(60), default=None)
    param_8_value = Column(Float, default=None)
    param_9_name = Column(String(60), default=None)
    param_9_value = Column(Float, default=None)

    def __init__(self, *args, **kwargs):
        """initializes strategy"""
        super().__init__(*args, **kwargs)
