module.exports = {

    // �����
    options: {
        limit: 3
    },

    // ������ ����������
    devFirst: [
        'clean',
        'jshint'
    ],
    devSecond: [
        'sass:dev',
        'uglify'
    ],

    // ���������������� ������
    prodFirst: [
        'clean',
        'jshint'
    ],
    prodSecond: [
        'sass:prod',
        'uglify'
    ],

    // ������ �����������
    imgFirst: [
        'imagemin'
    ]
};