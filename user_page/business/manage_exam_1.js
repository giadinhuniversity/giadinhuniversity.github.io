//var examList = Doc_Danh_sach_De_thi().Danh_sach_De_thi;
//var studentsList = Doc_Danh_sach_Sinh_vien().Danh_sach_Sinh_vien;
var examCode = document.getElementById("exam_code");
var studentCode = sessionStorage.getItem("student_code");
var theExam;

function checkExamCode(examCode) {
    var flag = 0;
    examList.forEach(exam => {
        if (exam.exam_code == examCode) {
            theExam = exam;
            sessionStorage.setItem("exam_code", exam.exam_code)
            flag++;
        }

    })
    if (flag != 0) {
        return true;
    } else {
        return false;
    }
}

function getInfoStudent(studentCode) {
    var theStudent;
    studentsList.forEach(student => {
        if (student.student_code == studentCode) {
            theStudent = student;
        }
    })
    return theStudent;
}
dong_y.onclick = () => {
    if (checkExamCode(examCode.value) == true) {
        var theStudent = getInfoStudent(studentCode);
        console.log(theStudent)
        ma_de_thi.innerHTML = theExam.exam_code;
        chu_de.innerHTML = theExam.topic;
        thoi_gian.innerHTML = theExam.time;
        so_cau_hoi.innerHTML = theExam.question_list.length;
        ho_ten.innerHTML = theStudent.full_name;
        ma_sv.innerHTML = theStudent.student_code;
        cmnd.innerHTML = theStudent.identity_card_number;
        lop.innerHTML = theStudent.student_class.class_name;
        ngay_sinh.innerHTML = theStudent.date_of_birth;
        khoa.innerHTML = theStudent.student_class.faculty;
        gioi_tinh.innerHTML = theStudent.sex;
        document.getElementById("nhap_ma_de").classList.add('hidden');
        document.getElementById("thong_tin").classList.remove('hidden');

    } else {
        thong_bao.innerHTML = "Mã đề không tồn tại"
    }
}