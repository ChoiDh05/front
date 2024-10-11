document.querySelectorAll(".star-rating .star").forEach(function (star) {
    // 클릭 이벤트 리스너 등록
    star.addEventListener("click", function () {
        let value = this.getAttribute("data-value");

        // 모든 별의 선택 상태 초기화
        document.querySelectorAll(".star-rating .star").forEach(function (s) {
            s.classList.remove("selected");
        });

        // 클릭한 별과 그 이전 별들 선택 상태로 변경
        this.classList.add("selected");
        let nextSiblings = getNextSiblings(this);
        nextSiblings.forEach(function (sibling) {
            sibling.classList.add("selected");
        });

        console.log("Selected rating:", value); // 선택된 별점 로그 출력
    });

    // 마우스 오버 시 미리보기 효과
    star.addEventListener("mouseover", function () {
        document.querySelectorAll(".star-rating .star").forEach(function (s) {
            s.classList.remove("hover");
        });
        this.classList.add("hover");
        let nextSiblings = getNextSiblings(this);
        nextSiblings.forEach(function (sibling) {
            sibling.classList.add("hover");
        });
    });

    // 마우스가 별에서 나갔을 때 미리보기 초기화
    star.addEventListener("mouseout", function () {
        document.querySelectorAll(".star-rating .star").forEach(function (s) {
            s.classList.remove("hover");
        });
    });
});

// 선택한 별과 그 이후 형제 요소들을 찾는 함수
function getNextSiblings(elem) {
    let siblings = [];
    siblings.push(elem); // 자신 포함
    while ((elem = elem.previousElementSibling)) {
        siblings.push(elem);
    }
    return siblings;
}

// 댓글 아이콘
const replyBtn = document.querySelector(".reply-btn");

// 댓글 말풍선
const replyPtag = document.querySelector(".action-tooltip");

replyBtn.addEventListener("mouseover", () => {
    replyPtag.style.display = "block";
});

replyBtn.addEventListener("mouseout", () => {
    replyPtag.style.display = "none";
});