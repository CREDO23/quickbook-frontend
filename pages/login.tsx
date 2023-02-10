import logo from '../public/icons/logo.png'
import Image from 'next/image'
import Input from '../components/Input'
import {MailOutlined} from '@ant-design/icons'
import Button from '../components/Button'

export default function Login(): JSX.Element {
    return <div className=" flex items-center  bg-blue-10 justify-center p-4 w-screen h-screen">
        <div className=' flex flex-col  items-center gap-6'>
        <div className='flex items-center justify-center h-40 w-40'>
            <Image className='w-full h-full' alt='logo' src={logo} />
        </div>
        <p className='text-2xl font-light text-white'>Sing In</p>
        <form className='w-80 flex flex-col items-center gap-3'>
            
            <Input size='large' placeholder='Enter your email' addonAfter={<MailOutlined className=' text-white'/>} onChange={() => {}}/>
           
           <Input size='large' type='password' placeholder='Enter your password' onChange={() => {}}/>
          
            
        </form>
        <Button type='primary' block title='LOGIN' onClick={() => {}}/>
        <div className='w-full flex items-center px-4 justify-between'>
        <Button type='link' block title='Password' onClick={() => {}}/>  <span className=' border inline-block h-6 border-blue-2 w-[1px]'></span>  <Button type='link' block title='Register' onClick={() => {}}/>
        </div>
        </div>
       
    </div>
}