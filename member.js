function skillsMember() {
	var member = document.querySelector('.member');
	var skills = document.querySelector('.skills');
	var memberSkills = document.querySelector('.member-skills');
	var memberSkillsClose = document.querySelector('.member-skills-close');

	member.addEventListener('click', function(e) {
		e.preventDefault();
		skills.classList.add('skills-active');
		memberSkills.classList.add('member-skills-active');
	});

	memberSkillsClose.addEventListener('click', function(e) {
		e.preventDefault();
		skills.classList.remove('skills-active');
		memberSkills.classList.remove('member-skills-active');
	});
}