import React from 'react'
import { useFormik } from 'formik'
const YoutubeForm = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            channel: ''
        },
        onSubmit: function(values) {
            console.log(values)
        },
        validate: function(values) {
            let error = {};
            if(!values.name) {
                error.name = '欄位為必填';
            }

            if (!values.email) {
                error.email = '欄位為必填';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                error.email = `無效的郵件地址`
            }

            return error;
        }
    })

    console.log(`formik`, formik.errors)

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className='form-control'>
                <label htmlFor='name'>Name</label>
                <input 
                    type='text' 
                    id='name' 
                    name='name' 
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
                {formik.errors.name && <div className='error'>{formik.errors.name}</div>}

                <label htmlFor='email'>E-mail</label>
                <input 
                    type='email' 
                    id='email' 
                    name='email'
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                {formik.errors.email && <div className='error'>{formik.errors.email}</div>}

                <label htmlFor='channel'>Channel</label>
                <input 
                    type='text' 
                    id='channel' 
                    name='channel'
                    onChange={formik.handleChange}
                    value={formik.values.channel}
                />
                

                <button>Submit</button>
            </div>
        </form>
    )
}

export default YoutubeForm