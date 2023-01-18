# Try Mockoon Serverless

An attempt to use the [Mockoon Serverless package](https://www.npmjs.com/package/@mockoon/serverless) with the Serverless framework.

## Usage

### Deployment

Install dependencies with:

```
npm install
```

and then deploy with:

```
serverless deploy
```

After running deploy, you should see output similar to:

```bash
Deploying aws-node-express-api-project to stage dev (us-east-1)

✔ Service deployed to stack aws-node-express-api-project-dev (196s)

endpoint: ANY - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev
functions:
  api: aws-node-express-api-project-dev-api (766 kB)
```

You should then be able to call the API like this:

```
curl https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/hello
{"hello": true}

curl https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/get\?hello\=true
{
  "args": {
	    "hello": "true"
			  },
	 ...
}
```

### Local development

You can start local emulation with:

```
serverless offline
```

To learn more about the capabilities of `serverless-offline`, please refer to its [GitHub repository](https://github.com/dherault/serverless-offline).
