const writeConfig = function(type, obj){

let {name, ...rest} = obj;

this.globalConfig[type][name] = rest;
}

export default writeConfig
