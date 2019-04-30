module.exports = {
	hooks: {
		readPackage
	}
};

function readPackage(pkg, ctx) {

	ctx.log(pkg.name)

	if(pkg.name === 'pino') {
		pkg.dependencies['pino-pretty'] = '^2.6'
	}

	return pkg;
}