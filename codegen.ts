import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  debug: true,
  verbose: true,
  overwrite: true,
  // schema: 'http://localhost:8080/graphql',
  schema: 'https://flyby-gateway.herokuapp.com/',
  documents: 'src/**/*.graphql',
  generates: {
    'src/generated/graphql.tsx': {
      config: { withHooks: true },
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo'
      ]
    }
  }
}

export default config
