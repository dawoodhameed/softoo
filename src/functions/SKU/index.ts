//grouping SKU functions together -> can have a separated serverless yml file
import schema from './schema';
import { handlerPath } from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.getCurrentStockLevelsFn`,
  events: [
    {
      http: {
        method: 'post',
        path: 'getCurrentStockLevels',
        request: {
          schemas: {
            'application/json': schema,
          },
        },
      },
    },
  ],
};
