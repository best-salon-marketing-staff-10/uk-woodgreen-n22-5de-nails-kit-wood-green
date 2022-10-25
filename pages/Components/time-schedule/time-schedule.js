import Button3 from '/pages/Components/buttons/button-3.js';
import { thongTinTiem1 } from '/pages/core/info';
import { thongTinTiem2 } from '/pages/core/info';

export default function TimeSchedule(){
    return(
        <>
            <div className="time-schedule">
                <div className="time-schedule-text">
                    <div className="time-schedule-title">
                        {thongTinTiem2.timeScheduleHeading}
                    </div>
                    <div className="time-schedule-description">
                            <div className="time-schedule-description">
                                {thongTinTiem2.workingTimeMon}
                                <br />
                                {thongTinTiem2.workingTimeTue}
                                <br />
                                {thongTinTiem2.workingTimeWed}
                                <br />
                                {thongTinTiem2.workingTimeThu}
                                <br />
                                {thongTinTiem2.workingTimeFri}
                                <br />
                                {thongTinTiem2.workingTimeSat}
                                <br />
                                {thongTinTiem2.workingTimeSun}
                            </div>   
                    </div>
                </div>
                <div className="button">
                    <Button3 />
                </div>
            </div>
        </>
    )
}