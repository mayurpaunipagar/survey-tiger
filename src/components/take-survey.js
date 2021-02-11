import { useSelector } from 'react-redux';
import { Button } from 'reactstrap';

export const TakeSurvey = () => {
    const surveyIds = useSelector((globalStore) => {
        return globalStore.surveys.filter(s=>s.isPublished).map((survey) => {
            return survey.surveyId;
        })
    });
    return (
        <div>
            <h2>Select which survey to take</h2>
            {surveyIds.map((id) => {
                return (
                    <div key={id}>
                        <Button className="main-btn">Survey {id}</Button>
                    </div>
                )
            })}
        </div>

    );

}