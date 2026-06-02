$(document).ready(function() {
    
    // 1. 네비게이션 클릭 시 페이지 전환 (SPA 로직)
    $('.nav-item').on('click', function(e) {
        e.preventDefault();

        // 클릭한 메뉴의 타겟 섹션 ID 가져오기
        const target = $(this).data('target');

        // 모든 페이지 숨기고 타겟 페이지만 활성화
        $('.page').removeClass('active');
        $('#' + target).addClass('active');

        // 네비게이션 메뉴 폰트 색상 업데이트
        $('.nav-item').removeClass('active-link');
        $(this).addClass('active-link');

        // 모바일 버전일 경우 메뉴 클릭 후 목록 닫기
        $('.nav-links').removeClass('show');

        // 페이지 전환 시 상단으로 스크롤 이동
        $('html, body').scrollTop(0);
    });

    // 2. 모바일 햄버거 메뉴 토글
    $('#mobile-toggle').on('click', function() {
        $('.nav-links').toggleClass('show');
    });

});