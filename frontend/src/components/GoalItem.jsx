import { useDispatch } from "react-redux"
import { TiDeleteOutline } from "react-icons/ti"

import { deleteGoal } from '../features/goals/goalSlice'

const GoalItem = ({ goal }) => {
  const dispatch = useDispatch()

  return (
    <div className="goal">
      <div>
        <h3>{goal.text}</h3>
        <button className="close" onClick={() => dispatch(deleteGoal(goal._id))}>
          <TiDeleteOutline />
        </button>
        {new Date(goal.createdAt).toLocaleDateString('en-GB')}
      </div>
    </div>
  )
}

export default GoalItem