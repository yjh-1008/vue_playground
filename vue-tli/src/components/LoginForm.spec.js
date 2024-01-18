import sum from './Math';
import LoginForm from './common/LoginForm.vue';
import { mount } from '@vue/test-utils';
sum(10, 20); //30;
describe('LoginForm.vue', () => {
	test('컴포넌트 마운팅되면 화면에 보여져야한다.', () => {
		const wrapper = mount(LoginForm, {
			shallow: true,
		});
		// const todo = wrapper.get('[data-test="id"]');/
		//find는 를 찾을 수 있다
		const idInput = wrapper.find('#id');
		idInput.setValue('test');
		expect(wrapper.vm.id).toBe('test');
	});
});
