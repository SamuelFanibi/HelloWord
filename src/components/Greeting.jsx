import Layout from './Layouts/Layout';

function Greeting(props) {
    return (
        <>
          <Layout>
            <h2> Hello World, {props.name}</h2>
            <p>Welcome to your first react application</p>
          </Layout>
        </>
    
    )
}

export default Greeting;