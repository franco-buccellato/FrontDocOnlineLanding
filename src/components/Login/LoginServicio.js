/* import axios from 'axios';

const LoginServicio = () => {

    const servicioDeLogueo = async credenciales => {
        const data = await axios.post(
            '/api/task/usuario/',
            credenciales,
            {headers: {'content-type': 'application/json'}}
        ).then(
            res => {
                console.log(res.data);
                return res.data;
            }
        )
        .catch(
            err => {
                console.log(err.response.data);
            }
        )

    }
}
export default LoginServicio; */