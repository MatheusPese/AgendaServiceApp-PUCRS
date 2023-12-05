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
  <div className='mx-auto text-2xl'>Negócios</div>
);

const Middle = (
  <div></div>
);

const Bottom = (
  <div className='mx-auto flex w-full justify-between'>
    <Button className='flex-2 m-2'>Menu</Button>
  </div>
);