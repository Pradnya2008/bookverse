from pydantic import BaseModel


class BookBase(BaseModel):
    title: str
    author: str
    category: str
    price: float
    quantity: int


class BookCreate(BookBase):
    pass


class BookUpdate(BookBase):
    pass


class BookResponse(BookBase):
    id: int

    class Config:
        from_attributes = True