
const Register = () => {
  return (
    <main className='w-full px-5'>
      <h1 className='text-3xl font-bold underline my-3'>Crear una nueva cuenta</h1>
      <form className='grid justify-start'>
        <input 
          className='border border-indigo-300 rounded-md my-3 h-10 text-indigo-700' 
          type='text' 
          placeholder='Ingrese su nombre completo'  
        />
        <input 
          className='border border-indigo-300 rounded-md my-3 h-10 text-indigo-700' 
          type='email' 
          placeholder='Ingrese su correo electrónico'  
        />
        <input 
          className='border border-indigo-300 rounded-md my-3 h-10 text-indigo-700' 
          type='password' 
          placeholder='Ingrese su contraseña'  
        />
        <input 
          className='border border-indigo-300 rounded-md my-3 h-10 text-indigo-700' 
          type='password' 
          placeholder='Confirme su contraseña'  
        />
        <input 
          type='file'  
        />
        <button className='bg-violet-400 text-white h-10 rounded-md my-5' type='submit'>Crear cuenta</button>
      </form>
    </main>
  )
}

export default Register
