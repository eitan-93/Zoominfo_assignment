# Zoominfo_assignment

Foobar is a Python library for dealing with word pluralization.

## Structure

The repository is divided into 2 folders, server and client:

*  The client side is implemented using Angular.
*  For the server side, 
   I've used Express as a framework for the server and Docker to define 2 containers :
         *  Server, which listens on localhost:4200
         *  Mongodb, which listens on localhost:27017.

## Build & Run

1. Client: 

   ```bash
   pip install foobar
   ```

## Usage

```python
import foobar

# returns 'words'
foobar.pluralize('word')

# returns 'geese'
foobar.pluralize('goose')

# returns 'phenomenon'
foobar.singularize('phenomena')
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
