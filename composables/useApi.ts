export default function useApi(){
    const data = useState('apiData',()=>null)
    onMounted(() => {
        fetch('/api/test').then((res)=> res.json()).then((re)=>{
            data.value = re.data
        })
    })
    return {data}
}