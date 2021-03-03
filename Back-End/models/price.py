#!/usr/bin/python3
"""class Price"""

import models
from models.base_model import BaseModel, Base
from sqlalchemy import Column, String, Float, DateTime
from sqlalchemy import ForeignKey, UniqueConstraint
from sqlalchemy.orm import relationship


class Price(BaseModel, Base):
    """Representation of a historical set of prices"""
    __tablename__ = 'prices'
    company_id = Column(String(60), ForeignKey('companies.id'), nullable=False)
    p_date = (DateTime, nullable=False)
    p_close = Column(Float, default=None)
    p_open = Column(Float, default=None)
    p_high = Column(Float, default=None)
    p_low = Column(Float, default=None)
    volume = Column(Float, default=None)

    # Should be just one date available per company
    __table_args__ = (UniqueConstraint('company_id', 'p_date',
                                       name='unique_date'),)

    def __init__(self, *args, **kwargs):
        """initializes Price"""
        super().__init__(*args, **kwargs)
