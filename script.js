function highlightKeywords() {
    let p = document.getElementById('paragraph');
    let html = p.innerHTML;
    // 'var', 'let', 'const' 같은 예약어를 강조하려면 아래 배열에 추가하세요.
    const keywords = ['var', 'let', 'const'];
    
    keywords.forEach(function(keyword) {
        const regex = new RegExp(`(${keyword})`, 'g');
        html = html.replace(regex, '<span class="keywords">$1</span>');
    });

    p.innerHTML = html;
}

highlightKeywords();