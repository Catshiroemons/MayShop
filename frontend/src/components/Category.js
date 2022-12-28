import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const CategoryFilter = ({ history }) => {
  const [cate, setcate] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (cate.trim()) {
      history.push(`/category/${cate}`)
    } else {
      history.push('/')
    }
  }

  return (
    
    <Form onSubmit={submitHandler} inline>
        <div className='mb-3 text-left'>
                <span className='mr-3'>Thể loại:</span>
                <select name="type" id="cate" className=' px-3 py-2' defaultValue={''}
                    onChange={(e) => setcate(e.target.value)}>
                    <option value={''}>-Xem tất cả-</option>
                    <option value={'van-hoc'}>Văn học</option>
                    <option value={'tam-ly'}>Tâm lý-Kỹ năng sống</option>
                    <option value={'Tiểu thuyết'}>Kinh tế</option>
                    <option value={'Novel'}>Tiểu thuyết</option>
                    <option value={'sach-giao-khoa'}>Giáo khoa-Tham khảo</option>
                    <option value={'ngoai-ngu'}>Sách ngoại ngữ</option>
                    <option value={'truyen-tranh'}>Truyện tranh-Thiếu nhi</option>
                </select>
        </div>
        <Button type='submit' variant='outline-success' className='p-2'>
        Search
      </Button>
    </Form>
  )
}

export default CategoryFilter
