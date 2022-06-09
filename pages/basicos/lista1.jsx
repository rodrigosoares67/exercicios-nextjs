export default function lista1() {
  const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  return (
    <div>
      {valores.map(function (item){
        return <span>{item}</span>
      })}
    </div>
  )
}