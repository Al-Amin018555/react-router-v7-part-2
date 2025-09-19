/** Data collection systems
 
 * 1. e.target.[name of the input field].value (jodi user form submit korar por data collect kore dekhte chai shekhetre ei method use korbo)
 
 * 2. use form action and formdata in the action handler. formData.get('name of the input field')

 *3. controlled component. one per each field. use stae on change of the field. useful to dynamically handle error.

 *4. handle all controlled field on one state object
 const [formData, setFormData] = useState({
    name: '',
    password: '',
    phone: '',
 })

 *5 uncnontrolled data collection using useRef()
 */