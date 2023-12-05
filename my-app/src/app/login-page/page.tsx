import LoginForm from '../components/login-form'

export default function LoginPage() {
    
  const BackgroundClasses ="bg-gradient-to-bl from-blue-400 via-teal-600 to-teal-300"
  return (  
    <main className= {`${BackgroundClasses} flex min-h-screen flex-col items-center justify-between`}>
      <LoginForm/>
    </main>
    
  )
}

