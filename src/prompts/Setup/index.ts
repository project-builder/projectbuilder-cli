import * as index from './methods'

const Setup = {
  database: index.getNameAndType,
  filesystem: index.getNameAndType,
  model: index.modelSetup,
  column: index.columnSetup
}

export default Setup;
