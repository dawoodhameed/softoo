### Project structure

The project code base is mainly located within the `src` folder. This folder is divided in:

- `functions` - containing code base and configuration for your lambda functions
- `services` - containing services and business logics independent of the proivder
- `database` - containing independent collection/database queries and mutations
- `__tests__` - containing test cases
- `models` - containing data models of the project
- `@types` - containing the respective types of services, shared logics
- `libs` - containing shared code base between the services and lambdas
- `constants` - containing constant value to be used throughout the project