// productsApp comes from webpack.config . new ModuleFederationPlugin({remotes:{productsApp:XXX}})
import 'productsApp/ProductsIndex';

console.log('container!');
