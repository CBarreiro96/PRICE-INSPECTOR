#!/usr/bin/python3
"""class Price"""

import models
from models.base_model import BaseModel, Base
from sqlalchemy import Column, String, Float, Date
from sqlalchemy import ForeignKey, UniqueConstraint
from sqlalchemy.orm import relationship


class Price(BaseModel, Base):
    """Representation of a historical set of prices"""
    __tablename__ = 'prices'
    company_id = Column(String(60), ForeignKey('companies.id'), nullable=False)
    p_date = Column('date', Date, nullable=False)
    p_close = Column('close', Float, default=None)
    p_open = Column('open', Float, default=None)
    p_high = Column('high', Float, default=None)
    p_low = Column('low', Float, default=None)
    volume = Column(Float, default=None)
    p_adj_close = Column('adj_close', Float, default=None)

    # Should be just one date available per company
    __table_args__ = (UniqueConstraint('company_id', 'date',
                                       name='unique_date'),)

    def __init__(self, *args, **kwargs):
        """initializes Price"""
        super().__init__(*args, **kwargs)
