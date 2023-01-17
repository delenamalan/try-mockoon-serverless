import { MockoonServerless } from '@mockoon/serverless';
import data from './data.json' assert { type: "json" };

// Load the Mockoon Environment object
const mockEnv = data;

const mockoonServerless = new MockoonServerless(mockEnv);

export const handler = mockoonServerless.awsHandler();