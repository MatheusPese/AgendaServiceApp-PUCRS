import PageTemplate from '../components/page-template'
import Button from '../components/button'

export default function Home() {
  return (
    <PageTemplate>
      {{
        Top: Top,
        Middle: Middle,
        Bottom: Bottom
      }}
    </PageTemplate>

  )
}


const Top = (
  <div>Titulo</div>
);

const Middle = (
  <div></div>
);

const Bottom = (
  <div>
    <Button className='flex-1'>Teste</Button>
    <Button className='flex-1'>Teste</Button>
  </div>
);