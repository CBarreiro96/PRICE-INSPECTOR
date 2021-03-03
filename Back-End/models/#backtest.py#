#!/usr/bin/python
"""class Backtest"""

import models
from models.base_model import BaseModel, Base
from sqlalchemy import Column, String, Integer, Float, DateTime
from sqlalchemy import ForeignKey, Table
from sqlalchemy.orm import relationship
from datetime import datetime


class Backtest(BaseModel, Base):
    """Representation of Backtest"""
    __tablename__ = 'backtests'
    company_id = Column(String(60), ForeignKey('companies.id'), nullable=False)
    user_id = Column(String(60), ForeignKey('users.id'), nullable=False)
    strategy_id = Column(String(60), ForeignKey('strategies.id'),
                         nullable=False)
    name = Column(String(128), nullable=False)
    number_oper = Column(Integer, nullable=False, default=0)
    initial_balance = Column(Float, nullable=False, default=0)
    final_balance = Column(Float, nullable=False, default=0)
    efectivity = Column(Float, nullable=False, default=0)
    rentability = Column(Float, nullable=False, default=0)
    param_0 = Column(Float, nullable=False, default=0)
    param_1 = Column(Float, nullable=False, default=0)
    param_2 = Column(Float, nullable=False, default=0)
    param_3 = Column(Float, nullable=False, default=0)
    param_4 = Column(Float, nullable=False, default=0)
    param_5 = Column(Float, nullable=False, default=0)
    param_6 = Column(Float, nullable=False, default=0)
    param_7 = Column(Float, nullable=False, default=0)
    param_8 = Column(Float, nullable=False, default=0)
    param_9 = Column(Float, nullable=False, default=0)
    initial_date = Column(DateTime, nullable=False)
    final_date = Column(DateTime, nullable=False)

    def __init__(self, *args, **kwargs):
        """initializes Backtest"""
        super().__init__(*args, **kwargs)
