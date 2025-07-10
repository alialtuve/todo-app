import { useNavigation } from "react-router-dom"; 


export const BtnSubmit = () => {
  const navigation = useNavigation()
  const isSubmiting = navigation.state === 'submitting'
  return (
    <button
      type='submit'
      className="btn btn-submit"
      disabled={isSubmiting}
    >
      {isSubmiting? 'submiting...' : 'submit'}
    </button>
  )
}
