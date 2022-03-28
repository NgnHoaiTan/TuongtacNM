import { Button } from '@mui/material'
import React, { useState } from 'react'

import Input from './Input/input'

const UploadArticleUser = () => {

    const [articleValue, setArticleValue] = useState({
        tieude: '',
        tenkhoahoc: '',
        tentiengviet: '',
        tendiaphuong: '',
        gioi: '',
        nganh: '',
        lop: '',
        ho: '',
        bo: '',
        giatrisudung: '',
        phanbo: '',
        tinhtrangmauvat: '',
        datdiemhinhthai: '',
        datdiemsinhthai: '',
        sinhcanh: '',
        diadiem: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(articleValue);
    }

    return (
        <>
            <form style={{ margin: '50px 80px' }} onSubmit={handleSubmit}>
                <Input
                    width='100%'
                    errorSubmit='Vui lòng điền tiêu đề'
                    title='Tiêu đề bài viết'
                    handleChange={(e) => setArticleValue({ ...articleValue, tieude: e.target.value })}
                />
                <Input
                    width='50%'
                    errorSubmit='Vui lòng điền tên khoa học'
                    title='Tên khoa học'
                    handleChange={(e) => setArticleValue({ ...articleValue, tenkhoahoc: e.target.value })}
                />
                <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                    <div style={{ width: '50%', marginRight: '10px' }}>
                        <Input
                            width='100%'
                            errorSubmit='Vui lòng điền tên tiếng việt'
                            title='Tên tiếng việt'
                            handleChange={(e) => setArticleValue({ ...articleValue, tenkhoahoc: e.target.value })}
                        />
                    </div>
                    <div style={{ width: '50%', marginLeft: '10px' }}>
                        <Input
                            width='100%'
                            errorSubmit='Vui lòng điền tên địa phương'
                            title='Tên địa phương'
                            handleChange={(e) => setArticleValue({ ...articleValue, tenkhoahoc: e.target.value })}
                        />
                    </div>
                </div>


                <Button type='submit' variant="contained" size='small'>Post</Button>
            </form>
        </>
    )
}

export default UploadArticleUser