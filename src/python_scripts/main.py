# #this is the script that will handle creating the ML model. 
# Status of the ML Model Code
# WIP [x]
# Completed []
# Converstion not finished; line 99 bug

# Attempting to use a movie csv first as following a tutorial
import numpy as np
from scipy.sparse import csr_matrix
from sklearn.neighbors import NearestNeighbors
import pandas as pd


# popularity_arg = sys.argv[1]
# price_arg = sys.argv[2]

# print('Popularity is: ' + popularity_arg)
# print('Price is: ' + price_arg)


# books = pd.read_csv(r'..\assets\books.csv') #dtype={'ISBN': 'int32', 'Book-Title': 'str'}

# X = books[['popularity', 'price']]
# model = NearestNeighbors(n_neighbors=5)
# model.fit(X.values)
# original_book_index = 0 

# product_features = X.iloc[original_book_index].values.reshape(1,-1)


# distances, indices = model.kneighbors(product_features)

# print(distances)
# print(indices)

# recommended_indices = indices.flatten()
# recomended_books = books.iloc[recommended_indices]['BookTitle'][1:]

# print("Here's the book you chose", books.iloc[original_book_index])
# print("Here's the recommended books", recomended_books)



#import the dataset
# indexing on title, as such, it will not show up as a column in the dataframe

# In case anything goes wrong, copied the working code before modifications are made. Below is that code
# books = pd.read_csv(r'..\assets\books.csv') #dtype={'ISBN': 'int32', 'Book-Title': 'str'}

# X = books[['popularity', 'price']]
# model = NearestNeighbors(n_neighbors=5)
# model.fit(X.values)
# original_book_index = 0 

# product_features = X.iloc[original_book_index].values.reshape(1,-1)


# distances, indices = model.kneighbors(product_features)

# print(distances)
# print(indices)

# recommended_indices = indices.flatten()
# recomended_books = books.iloc[recommended_indices]['BookTitle'][1:]

# print("Here's the book you chose", books.iloc[original_book_index])
# print("Here's the recommended books", recomended_books)
